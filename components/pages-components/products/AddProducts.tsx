import { ArrowDown } from "lucide-react";
import { createProduct, updateProduct } from "@/api/requests";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
interface AddProductsProps {
  refetchProducts: () => void;
  editMode: boolean;
  product?: Product;
}

export default function AddProducts({
  refetchProducts,
  editMode = true,
  product,
}: AddProductsProps) {
  const schema = z.object({
    brand: z.string().min(2, "Brand must be at least 2 characters"),
    title: z.string().min(2, "Title must be at least 2 characters"),
    price: z.number().positive("Price must be greater than 0").int(),
  });

  type FormData = z.infer<typeof schema>;
  const addMutation = useMutation({
    mutationFn: (data: FormData) => {
      return createProduct({
        category: data.brand,
        price: data.price,
        name: data.title,
      });
    },

    onSuccess: () => {
      toast.success("The product is added");
      reset({ brand: "", title: "", price: undefined });
      refetchProducts();
    },
    onError: (err) => {
      toast.error(err.message)
    },
    
  });
  const addProduct = (data: FormData) => {
   addMutation.mutate(data)
  };

  const editProduct = (data: FormData) => {
    updateProduct(product?.id || "", {
      category: data.brand,
      price: data.price,
      name: data.title,
    })
      .then(() => {
        toast.success("The product is updated");
        refetchProducts();
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      brand: product?.category || "",
      price: product?.price,
      title: product?.name || "",
    },
  });
  return (
    <form onSubmit={handleSubmit(editMode ? editProduct : addProduct)}>
      <div className="w-fit h-fit flex flex-col items-center justify-center gap-4 p-6 rounded-2xl shadow-lg bg-blue-200">
        <span className="text-blue-900 text-xl font-bold flex flex-col justify-center items-center ">
          Please complete the fields below
          <ArrowDown />
        </span>
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter Brand"
            {...register("brand")}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
          />
          {errors.brand && (
            <p className="text-red-500 text-sm">{errors.brand.message}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Enter Title"
            {...register("title")}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter Price"
            {...register("price", { valueAsNumber: true })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full px-4  cursor-pointer disabled:cursor-not-allowed disabled:opacity-50  py-2.5 rounded-lg border border-gray-300 bg-blue-500 text-white  shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
        >
          Add new Product
        </button>
      </div>
    </form>
  );
}

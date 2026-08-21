import { Headphones, Phone, Mail } from "lucide-react";



export default function Page6() {
 

  const contactInfo = [
    {
      id: 1,

      icon: Headphones,

      title: "Help Center",

      value: "help.stella.com",
    },

    {
      id: 2,

      icon: Phone,

      title: "Phone",

      value: "+966577014820",
    },

    {
      id: 3,

      icon: Mail,

      title: "Email Support",

      value: "online@stella.com",
    },
  ];

  return (
    <section className="bg-background w-full md:w-full  py-2 ">
      <div className="flex items-center flex-col md:flex-row gap-5 md:gap-20 justify-between w-full p-10">
        <div className="flex-row justify-between items-center ">
          <h2 className="text-2xl font-bold text-foreground">
            {("page6-title")}
          </h2>

          <p className="mt-2 text-muted-foreground">{("page6-description")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:gap-10">
          {contactInfo.map((contact) => {
            const Icon = contact.icon;

            return (
              <div
                key={contact.id}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <div className="rounded-full bg-background p-3 shadow-sm">
                  <Icon size={24} className="text-brand" />
                </div>

                <div>
                  <p className="text-sm text-chart-3">{contact.title}</p>

                  <p className="font-semibold text-foreground">{contact.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

//

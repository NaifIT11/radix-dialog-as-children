import * as Dialog from "@radix-ui/react-dialog";

type Member = {
  name: string;
  role: string;
  email: string;
};

export default function Member({ name, role, email }: Member) {
  return (
    <div className="p-4 rounded border flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">{name}</h1>
        <Dialog.Root>
            
        </Dialog.Root>
      </div>
      <p className="text-sm">{role}</p>
      <p className="text-sm">{email}</p>
    </div>
  );
}

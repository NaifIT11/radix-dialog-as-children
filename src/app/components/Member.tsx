import * as Dialog from "@radix-ui/react-dialog";
import { Edit2, X } from "lucide-react";

type Member = {
  name: string;
  role: string;
  email: string;
};

export default function Member({ name, role, email }: Member) {
  return (
    <div className="p-4 rounded border flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{name}</h1>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Edit2 className="w-4 h-4" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/55" />
            <Dialog.Content className="fixed flex flex-col gap-4 rounded p-4 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-xl">
                    Edit Information
                  </Dialog.Title>
                  <Dialog.Close>
                    <X className="w-4 h-4" />
                  </Dialog.Close>
                </div>
                <Dialog.DialogDescription className="text-sm">
                  by editing this information u accept our term and condition
                </Dialog.DialogDescription>
              </div>
              <form className="flex flex-col gap-3">
                <div className="grid gap-2">
                  <label htmlFor="name">name:</label>
                  <input type="text" id="name" />
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <p className="text-sm">{role}</p>
      <p className="text-sm">{email}</p>
    </div>
  );
}

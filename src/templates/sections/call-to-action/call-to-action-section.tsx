import { ArrowRight, Store } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-950/50 tp-gray-700 relative">
      <div className="bg-cyan-300 rounded-full p-4 w-fit absolute -top-5 left-[48%] z-10">
        <Store className="text-cyan-100" />
      </div>
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
      <div className="container pt-4 relative">
        <div className="flex flex-col items-center gap-6 text-center ">
          <h2 className="font-sans text-gray-100 text-balance text-heading-xl">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button variant="primary" asChild className="mt-6">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

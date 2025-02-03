import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";

import { signIn } from "@/api/signIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

function SignIn() {
  const [searchParams] = useSearchParams();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: { email: searchParams.get("email") ?? "" },
  });

  const { toast } = useToast();

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email });

      toast({
        variant: "success",
        description: "Enviamos um link de autenticacao para seu e-mail.",
        action: <ToastAction altText="Acessar link">Acessar</ToastAction>,
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Falha na requisicao",
        description:
          "Ocorreu um erro ao tentar autenticar, verifique seu e-mail.",
      });
    }
  }

  return (
    <div className="p-8">
      <Button asChild className="absolute right-8 top-8" variant={"ghost"}>
        <Link to="/sign-up">Novo estabelecimento</Link>
      </Button>

      <div className="flex w-[320px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
          <div className="space-y-1">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <Button className="w-full" disabled={isSubmitting}>
            Acessar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

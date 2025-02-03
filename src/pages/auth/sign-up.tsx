import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import { registerRestaurant } from "@/api/registerRestaurant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

const signUpForm = z.object({
  restaurantName: z.string(),
  email: z.string().email(),
  managerName: z.string(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

function SignUp() {
  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      });

      toast({
        variant: "success",
        description: "Restaurante cadastrado com sucesso!",
        action: (
          <ToastAction
            altText="Acessar link"
            onClick={() => navigate(`/sign-in?email=${data.email}`)}
          >
            Fazer Login
          </ToastAction>
        ),
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Falha ao tentar cadastro",
        description: "Ocorreu um erro ao tentar cadastrar seu estabelecimento.",
      });
    }
  }

  const { toast } = useToast();

  const navigate = useNavigate();

  return (
    <div className="p-8">
      <Button asChild className="absolute right-8 top-8" variant={"ghost"}>
        <Link to="/sign-in">Ja tem cadastro?</Link>
      </Button>
      <div className="flex w-[320px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta gratis
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
          <div className="space-y-1">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register("restaurantName")}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="managerName">Seu Nome</Label>
            <Input id="managerName" type="text" {...register("managerName")} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Seu celular</Label>
            <Input id="phone" type="tel" {...register("phone")} />
          </div>
          <Button className="w-full" disabled={isSubmitting}>
            Finalizar cadastro
          </Button>
        </form>
        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, voce concorda com nossos{" "}
          <a className="cursor-pointer underline underline-offset-4 hover:opacity-80">
            termos de servico
          </a>{" "}
          e{" "}
          <a className="cursor-pointer underline underline-offset-4 hover:opacity-80">
            politicas de privacidade
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

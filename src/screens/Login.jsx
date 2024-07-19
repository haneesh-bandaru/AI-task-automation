import { authContext } from "@/App";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/services/Api";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(authContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const result = await login(data);
    if (result) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      window.alert("check credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-primary h-screen w-screen">
        <Card className="w-[350px] bg-white p-4 mx-auto translate-y-1/2">
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your details to login</CardDescription>
          <CardContent className="pl-0 mt-4 flex flex-col gap-2">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input {...register("username")} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input {...register("password")} type="password" />
            </div>
          </CardContent>
          <CardFooter className="pl-0">
            <Button type="submit">Login</Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default Login;
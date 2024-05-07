import zod, { ZodError } from "zod";

function inputValidation(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

inputValidation({
  email: "Chinmay@gmail.com",
  password: "1245334535",
});

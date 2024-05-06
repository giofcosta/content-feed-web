import { createSwaggerSpec } from "next-swagger-doc";
import { swaggerSchemas } from "./swagger.schemas";
export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "src/app/api", // define api folder under app folder
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Content Feed Swagger API Docs",
        version: "1.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
        schemas: swaggerSchemas,
      },
      security: [],
    },
  });
  return spec;
};

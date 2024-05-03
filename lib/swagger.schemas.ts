export const swaggerSchemas = {
  Content: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      image: {
        type: "string",
      },
      title: {
        type: "string",
      },
      subTitle: {
        type: "string",
      },
      description: {
        type: "string",
      },
      author: {
        type: "string",
      },
      commentsCount: {
        type: "number",
      },
    },
  },
  ContentWithComments: {
    allOf: [
      {
        $ref: "#/components/schemas/Content",
      },
      {
        type: "object",
        properties: {
          comments: {
            type: "array",
            items: {
              type: "object",
              properties: {
                text: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    ],
  }
}
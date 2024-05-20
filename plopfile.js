export default function (plop) {
  // create your generators here
  plop.setGenerator("components", {
    description: "React component using Typescript",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name: ",
      },
      {
        type: "list",
        name: "category",
        message: "Which category type do you need?",
        choices: ["atoms", "molecules", "organisms", "charts"],
      },
      {
        type: "input",
        name: "tag",
        message: "Tag name: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{category}}/{{upperCamel name}}",
        templateFiles: "plop_templates/component/**/*.hbs",
        base: "plop_templates/component",
      },
    ],
  });

  plop.setHelper("upperCamel", (txt) =>
    txt
      .split(" ")
      .map((word) =>
        Array.from(word)
          .map((char, idx) => (idx === 0 ? char.toUpperCase() : char.toLowerCase()))
          .join(""),
      )
      .join(""),
  );
}

import { paramCase } from "change-case";
import { component, scss, include } from "./templates.js";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";

function createFile(path_of_file, content) {
  fs.writeFile(path_of_file, content, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`${path_of_file} was created `);
  });
}

inquirer
  .prompt([
    {
      type: "list",
      name: "component-type",
      message: "What king of component are you creating?",
      choices: [
        {
          name: "Im creating creating a UI component",
          value: "_ui",
        },
        {
          name: "Im creating creating a Provider component",
          value: "_providers",
        },
        {
          name: "Im creating creating a Business Logic component",
          value: "behavior",
        },
      ],
    },
    {
      type: "input",
      name: "component-name",
      message: "What is the component name?",
    },
  ])
  .then((answers) => {
    const component_name = answers["component-name"];
    const folder_name = paramCase(component_name);
    const folder_path = path.join(
      "src",
      "components",
      answers["component-type"],
      folder_name
    );

    fs.access(folder_path, function (error) {
      if (error) {
        fs.mkdir(folder_path, (err) => {
          if (err) {
            return console.log(err);
          }
          createFile(path.join(folder_path, "Component.module.scss"), scss());
          createFile(
            path.join(folder_path, "index.js"),
            component(component_name)
          );
          fs.appendFile(
            path.join("src", "components", "index.js"),
            include(
              component_name,
              `${answers["component-type"]}/${folder_name}`
            ),
            (e) => {
              if (e) {
                return console.error(e);
              }
            }
          );
        });
      } else {
        console.log("Component already exist, please try another name");
      }
    });
  });
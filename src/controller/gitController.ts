
import { EChoicesBoilerplate } from "src/enum/choices-boilerplate.enum";
import { ERpos } from "src/enum/repos";
import { exec } from "node:child_process";

const execPath = (gitName: string, folderName: string) => {
  console.log(`${ERpos.GITHUB}/${ERpos.GITUSER}/${gitName}`, folderName)

  exec(`${ERpos.GITHUB}/${ERpos.GITUSER}/${gitName} ${folderName}`, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
      return
    }

    if (stderr) {
      console.log(stderr)
      return
    }

    console.log(`Success: ${stdout}`)
    return

  })
}

export const cloneRepo = (answer: string, folderName: string): void => {
  try {
    switch (answer) {
      case EChoicesBoilerplate.NODEJS_TS:
        execPath(ERpos.NODEJS_TS, folderName)
        break;

      case EChoicesBoilerplate.SCSS:
        execPath(ERpos.SCSS, folderName)
        break;
    }
  } catch (e) {
    return console.log(`err: ${e}`)
  }

}


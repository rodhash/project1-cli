
import { input } from "@inquirer/prompts";
import { EErrors } from "./enum/errors.enum";
import { ERpos } from "./enum/repos";

import path from "node:path";
import fs from 'node:fs'

type InputType  = Parameters<typeof input>[0]

export const inputConfig: InputType = {
  message: 'Folder name to be created:',
  validate(value: string) {
    if (!value || value === 'ha' || /[^\w\s-]|\s/.test(value)) {
      return EErrors.Invalid_name
    }

    if (
      value === ERpos.NODEJS_TS ||
      value === ERpos.SCSS
    )
      return EErrors.Git_name

    try {
      const dir = path.resolve(value)
      fs.accessSync(dir,fs.constants.R_OK)
      return EErrors.Folder_exists
    } catch (e) {}

    return true
  },
}


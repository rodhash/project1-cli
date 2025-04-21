
import { EChoicesBoilerplate } from "./enum/choices-boilerplate.enum"
import { select } from "@inquirer/prompts";

type SelectType = Parameters<typeof select<string>>[0]

export const questions = [
  {
    name: EChoicesBoilerplate.NODEJS_TS,
    value: EChoicesBoilerplate.NODEJS_TS,
    description: 'Node FTW'
  },
  {
    name: EChoicesBoilerplate.SCSS,
    value: EChoicesBoilerplate.SCSS,
    description: 'Interesting thing for CSS',
  }
]

export const stackQuestion: SelectType = {
  message: 'Select a stack',
  choices: questions,
}


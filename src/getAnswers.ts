
import { select, input } from "@inquirer/prompts";
import { IAnswers } from "./interface/answers.interface";
import { stackQuestion } from "./questions";
import { inputConfig } from "./input";

type InputReturnType  = ReturnType<typeof input>
type SelectReturnType = ReturnType<typeof select<string>>

export const getAnswers = async(): Promise<IAnswers> => {
  const answer    : Awaited<SelectReturnType> = await select<string>(stackQuestion)
  const folderName: Awaited<InputReturnType>  = await input(inputConfig)

  return {answer, folderName}
}


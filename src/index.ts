import { getAnswers } from "./getAnswers";
import { cloneRepo } from "./controller/gitController";

const main = async(): Promise<void> => {
  const {answer, folderName} = await getAnswers()
  cloneRepo(answer, folderName)
}

main()


import { genSaltSync, hashSync, compareSync} from "bcrypt";

export class HashManagerService {
    hash = (plainText:string):string => {
    const cost = Number(12)
    const salt = genSaltSync(cost)
    return  hashSync(plainText,salt) 
    }

    compare = (plainText:string, cypherText: string):boolean => {
        return compareSync(plainText,cypherText)
    }
}

export default new HashManagerService()
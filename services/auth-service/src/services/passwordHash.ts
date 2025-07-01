import bcrypt from "bcrypt"

export default class PasswordHash {
    static async hashPassword(password: string) : Promise<string> {
        const saltRounds = 10

        return await bcrypt.hash(password, saltRounds)
    }

    static async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }
}

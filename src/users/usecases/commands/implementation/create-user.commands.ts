export class CreateUserCommand {
    constructor(
        readonly email: string, 
        readonly password: string
    ) {}
}
export interface ValidateUserAwareInterface {
    check(email: string): Promise<any>;
}
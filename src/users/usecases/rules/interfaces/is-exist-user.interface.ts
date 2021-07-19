export interface IsExistUserAwareInterface {
    check(email: string): Promise<boolean> | boolean;
}
export const validateFirstName = (data:string) => {
    if (!data || data == '' || data.length <= 2) {
        return false;
    }

    return true;
}
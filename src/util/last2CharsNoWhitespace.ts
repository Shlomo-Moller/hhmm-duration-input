export const last2CharsNoWhitespace = (value: string): string => {
    const trimmed = value?.trim?.();

    const {length} = trimmed;

    return trimmed.substring(length - 2);
};

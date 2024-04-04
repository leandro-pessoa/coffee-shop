const variables = {
    // fontes
    primaryFont: '"Poppins", sans-serif',
    secondaryFont: '"Butterfly Kids", cursive',

    // cores
    white: '#f1f1f1',
    green: '#2c6e2c',
}

const flex = (
    direction?: string,
    justify?: string,
    align?: string,
    gap?: string,
) => {
    return `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
    `
}

export { variables, flex }
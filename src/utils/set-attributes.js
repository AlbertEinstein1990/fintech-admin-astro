const setAttributes = (node, attributes) =>
{
    Object.entries(attributes).forEach(([k, v]) => 
    {
        if (v !== undefined) node.setAttribute(k, v)
        else node.removeAttribute(k)
    });
}

export default setAttributes;
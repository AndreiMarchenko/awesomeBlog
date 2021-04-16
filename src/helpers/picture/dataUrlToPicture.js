async function dataUrlToPicture (dataUrl) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], "picture", { type: 'image/png' });
}

export default dataUrlToPicture;
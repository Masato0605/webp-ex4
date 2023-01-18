export async function fetchImages(){
    const response = await fetch(
        `https://yesno.wtf/api`
    );
    const data = await response.json();
    return data.image;
}
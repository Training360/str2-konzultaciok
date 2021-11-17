// Változó a kapott adatok tárolására.
let userList = [];
const getUserList = () => userList;

// Általános függvény, bármilyen lista lekérésére.
const getList = (url = '') => {
    fetch(url)
        .then(
            response => response.json(),
        ).then(
            list => userList = list,
        ).catch(
            httpError => console.log('Error: ', httpError),
        );
};

// Általános függvény, async/await használatával.
const getListAsync = async (url = '') => {
    // - küldd el a kérést: fetch(url)
    // - várd meg amíg megjön a válasz: await
    // - a választ tedd a response változóba: const response =
    const response = await fetch(url);

    // - alakítsd át a json adatot tömbbé: response.json()
    // - várd meg amíg az átalakítás megtörténik: await
    // - mentsd el a kapott tömböt a list változóba: const list =
    const list = await response.json();
    userList = list;
};

// Ugyanez hibakezeléssel:
const getListAsyncWithCatch = async (url = '') => {
    try {
        const response = await fetch(url);
        const list = await response.json();
        userList = list;
    } catch(e) {
        console.log('Error: ', e);
    }
};

// Async/await használata visszatérési értékkel Promise<any>.
const getListWithPromise = async (url = '') => {
    try {
        const response = await fetch(url);
        const list = await response.json();
        return list;
    } catch(e) {
        console.log('Error: ', e);
        return [];
    }
};

// getUsers('https://nettuts.hu/jms/js4-002/products?limit=5');
// A felhasználók lekérése egy távoli szerverről a fetch segítségével.
const getUsers = (url = '') => {
    getList(url);
};

export {
    getUsers,
    getUserList,
    getList,
    getListAsync,
    getListWithPromise,
}

import { Name } from "./class/Name";
import { User } from "./class/User";

const misi: User = new User({
    id: 1,
    name: new Name('Mihály', 'Kovács', 'Dr.'),
    address: 'Budapest',
    email: 'kovcsm@gmail.com',
    role: 'admin',
});

const geza: User = new User({
    id: 1,
    name: new Name('Géza', 'Kovács', 'Dr.'),
    address: 'Budapest',
    email: 'kovcsm@gmail.com',
    role: 'admin',
});

const ottokar: User = new User({
    id: 1,
    name: new Name('Ottokár', 'Kovács', 'Dr.'),
    address: 'Budapest',
    email: 'kovcsm@gmail.com',
    role: 'admin',
});

const userList: User[] = [
    misi,
    geza,
    ottokar,
];

for (const item of userList)  {
    console.log(item.name.getFullName());
}

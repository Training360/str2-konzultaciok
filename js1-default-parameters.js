const printUser = ({age = 22, name = 'Joe',  email = 'v@v.hu'} = {name, age, email}) => {
    const currentYear = new Date().getFullYear();
    const bornYear = currentYear - age;
    console.log(`Hello, my name is ${name}, I was born in ${bornYear} and my mail is ${email}.`);
};

const users = [
    {name: 'Jack', age: 29, email: 'j@j.hu'},
    {name: 'Jack', email: 'j@j.hu'},
    {name: 'Robert', email: 'j@j.hu'},
    {name: 'Jack', age: 19, email: 'j@j.hu'},
    {name: 'Jack', age: 44, email: 'j@j.hu'},
    {name: 'Evelin', age: 44, email: 'j@j.hu'},
    {name: 'Jack', age: 44, email: 'j@j.hu'},
    {name: 'Daniel', age: 44, email: 'j@j.hu'},
];

for (const user of users) {
    printUser(user);
}

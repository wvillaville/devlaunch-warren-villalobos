import PromptSync from "prompt-sync";

const prompt = PromptSync();

interface Account {
    id: number;
    name: string;
    balance: number;
}

const createAccount = (id: number, name: string, balance: number= 0): Account => {
    return { id, name, balance };
}


const acc1 = createAccount(1, 'Warren Villalobos', 1000);
const acc2 = createAccount(2, 'Lara Villalobos');

console.log(acc1);
console.log(acc2);
const person = {
  name: "Ivan",
};

function info(phone, email) {
  console.log(`name: ${this.name}, phone: ${phone}, email: ${email}`);
}

function bindMy(fn, context, ...rest) {
  return function (...args) {
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](...rest.concat(...args));
    delete context[uniqId];
    return result;
  };
}

bindMy(info, person, "24242342", "awegarga")();
bindMy(info, person)("24242342", "awegarga");
bindMy(info, person, "24242342"), "awegarga";

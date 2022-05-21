const getName = (name: string) => {
    let content = name.split(" ");
    let initialLetras = content.map((a) => a.slice(0, 1));
    if (initialLetras.length > 1) {
      return `${initialLetras[0]}${initialLetras[1]}`;
    } else {
      return `${initialLetras[0]}`;
    }
  };

export {getName}
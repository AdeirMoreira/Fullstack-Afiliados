import moment from "moment";

export function formatDateMomentJS(date, format = "DD/MM/YYYY HH:mm", add = 0) {
  return moment(date).add(add, "hours").format(format);
}

export function formatReal(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

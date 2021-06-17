import { describe, expect, test } from "@jest/globals";
import { Cliente } from "../src/entities/client.js";

describe("client services suite tests ", () => {
  test("it should check an existent client with the informed cpf", () => {          
      const cpf = '00071';
      const client = new Cliente()

      const result = client.checkClientByCpf(cpf);
      const expected = {name: 'Ruan Felipe', cpf: '00071'}
      expect(result).toStrictEqual(expected);
  });
});

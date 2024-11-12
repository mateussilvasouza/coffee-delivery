// src/hooks/useViaCep.ts
import { useState } from "react";
import { viaCepApi } from "../services/api";

interface Address {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}
export function useViaCep() {
  const [error, setError] = useState<string | null>(null);

  const fetchAddress = async (cep: string): Promise<Address | null> => {
    try {
      const response = await viaCepApi.get<Address>(`${cep}/json`);
      if (response.data.erro) {
        setError("CEP não encontrado");
        return null;
      } else {
        setError(null);
        return response.data;
      }
    } catch {
      setError("Erro ao buscar o CEP");
      return null;
    }
  };

  return { error, fetchAddress };
}

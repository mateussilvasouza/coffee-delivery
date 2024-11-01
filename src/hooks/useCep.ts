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
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchAddress = async (cep: string) => {
    try {
      const response = await viaCepApi.get<Address>(`${cep}/json`);
      if (response.data.erro) {
        setError("CEP não encontrado");
        setAddress(null);
      } else {
        setAddress(response.data);
        setError(null);
      }
    } catch {
      setError("Erro ao buscar o CEP");
      setAddress(null);
    }
  };

  return { address, error, fetchAddress };
}

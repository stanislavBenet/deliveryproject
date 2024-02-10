import axios from "axios";


interface ApiResponse {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}



export async function fetchData(url: string): Promise<ApiResponse> {
  try {
    const response = await axios.get<ApiResponse>(url);
    return response.data; // данные доступны через свойство data
  } catch (error:any) {
    if (axios.isAxiosError(error)) {
      // Обработка ошибки, специфичной для Axios
      console.error("Error message:", error.message);
      throw new Error(`Axios error: ${error.message}`);
    } else {
      // Неизвестная или сетевая ошибка
      console.error("Unexpected error:", error);
      throw new Error(`Unexpected error: ${error}`);
    }
  }
}




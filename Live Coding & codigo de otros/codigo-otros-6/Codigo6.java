package ejercicio3live;

public class Codigo6 {

	public static void main(String[] args) {

		int[] n = new int[20]; // Añadimos new

		for (int i = 0; i < 20; i++) { // Añadimos ++
			n[i] = (int) ((Math.random() * 381) + 20);
			System.out.print(n[i] + " ");
		}

		System.out.println("\n¿Qué números quiere resaltar? ");// Añadimos ln
		System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
		int opcion = Integer.parseInt(System.console().readLine());// Añadimos ) al final

		int multiplo = (opcion == 1) ? 5 : 7; // Cambiamos de lugar ? y :

		for (int e : n) { // Cambiamos forEach a for //Cambiamos a char a int
			if (e % multiplo == 0) {
				System.out.print("[" + e + "] ");

			} else { // Saacamos else del if
				System.out.print(e + " ");// Cambiamos in por Out
			}
		}
	}
}

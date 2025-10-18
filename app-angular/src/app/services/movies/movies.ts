import { Injectable } from '@angular/core';
import { Movie } from '../../models/Movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/?apikey=2ff6c6e4&t=From&Season=1';

  private movies: Movie[] = [
    { 
      title: 'El Conjuro 4', 
      year: 2025, 
      duration: '2h 15m',
      rating: 8.7,
      description: 'La nueva entrega del universo de terror con los Warren enfrentando un caso más oscuro que nunca. Vera Farmiga y Patrick Wilson se reúnen para un último caso como los célebres investigadores paranormales de la vida real, Ed y Lorraine Warren, en una adición poderosa y escalofriante a la franquicia que rompe récords en taquilla global.', 
      image: 'assets/img_movies/the-conjuring.webp' 
    },
    { 
      title: 'Demon Slayer: Kimetsu no Yaiba Castillo infinito', 
      year: 2025, 
      duration: '2h 8m',
      rating: 9.2,
      description: 'Con el jefe de la organización en peligro, Tanjirō y los Pilares corren hacia la mansión, pero son arrastrados a un espacio misterioso por obra de Kibutsuji. El lugar al que han caído Tanjirō y los cazadores es el bastión de los demonios: el Castillo Infinito. Así, el campo de batalla queda establecido para dar fin a la guerra entre humanos y demonios.', 
      image: 'assets/img_movies/demon-slayer-infinity-castle.webp' 
    },
    { 
      title: 'Bridget Jones: Loca por él', 
      year: 2025, 
      duration: '2h 5m',
      rating: 7.8,
      description: 'En Bridget Jones: Loca por él, Bridget vuelve a estar sola, pues enviudó hace cuatro años, cuando mataron a Mark en una misión humanitaria en Sudán. Ahora es la madre soltera de Billy, que tiene nueve años, y de Mabel, que tiene cuatro, y está atrapada en un limbo emocional. Cría a sus hijos con la ayuda de su fiel círculo de amistades y hasta de su examante, Daniel Cleaver (Hugh Grant).', 
      image: 'assets/img_movies/bridget-jones.webp' 
    },
    { 
      title: 'Tarot de la muerte', 
      year: 2024, 
      duration: '1h 52m',
      rating: 6.3,
      description: 'Cuando un grupo de amigos viola imprudentemente la regla sagrada de las lecturas de Tarot -nunca usar la baraja de otra persona-, desatan sin saberlo un mal innombrable atrapado en las cartas malditas. Uno a uno, se enfrentan cara a cara con el destino y terminan en una carrera contra la muerte para escapar del futuro predicho en sus lecturas.', 
      image: 'assets/img_movies/tarot.webp' 
    },
    { 
      title: 'Dune: Parte Dos', 
      year: 2024, 
      duration: '2h 46m',
      rating: 9.1,
      description: 'Sigue la mítica jornada de Paul Atreides mientras se une con Chani y los Fremen en su camino hacia la venganza contra los conspiradores que destruyeron a su familia. Enfrentado a una elección entre el amor de su vida y el destino del universo conocido, Paul se esfuerza por prevenir un terrible futuro que solo él puede prever.', 
      image: 'assets/img_movies/dune-2.webp' 
    },
    { 
      title: 'Deadpool & Wolverine', 
      year: 2024, 
      duration: '2h 7m',
      rating: 8.9,
      description: 'Un apático Wade Wilson se esfuerza por adaptarse a la vida civil. Sus días como el mercenario moralmente flexible, Deadpool, han quedado atrás. Cuando su mundo se enfrenta a una amenaza existencial, reaciamente Wade debe ponerse el traje de nuevo, junto con un aún más reacio… ¿muy reacio? ¿reacísimo?... Tiene que convencer a un súper-reacio Wolverine a... Mierda. Las sinopsis son tan increíblemente estúpidas.', 
      image: 'assets/img_movies/deadpool-wolverine.webp' 
    },
    { 
      title: 'Flow', 
      year: 2024, 
      duration: '1h 45m',
      rating: 7.5,
      description: 'Un gato se despierta en un mundo cubierto de agua, donde toda la raza humana parece haber desaparecido. Busca refugio en un barco con un grupo de animales. Pero llevarse bien con ellos resulta ser un reto aún mayor que superar su miedo al agua. Todos tendrán que aprender a superar sus diferencias y adaptarse a este nuevo mundo en el que se encuentran.', 
      image: 'assets/img_movies/flow.webp' 
    },
    { 
      title: 'El señor de los anillos: La guerra de los Rohirrim', 
      year: 2024, 
      duration: '2h 22m',
      rating: 8.4,
      description: 'El Señor de los Anillos: La Guerra de los Rohirrim (HBO): Héra, la hija de Helm Hammerhand, el legendario rey de Rohan, tendrá que resistir hasta el final liderando la resistencia contra un enemigo letal.', 
      image: 'assets/img_movies/guerra_rohirrim.webp' 
    },
    { 
      title: 'Barbie', 
      year: 2023, 
      duration: '1h 54m',
      rating: 7.9,
      description: 'La muñeca más famosa del mundo cobra vida en una historia colorida y llena de humor. Una muñeca que vive en Barbieland es expulsada al mundo real por no ser lo suficientemente perfecta. Basada en la popular muñeca Barbie.', 
      image: 'assets/img_movies/barbie.webp' 
    },
    { 
      title: 'Jujutsu Kaisen 0: La película', 
      year: 2021, 
      duration: '1h 45m',
      rating: 8.6,
      description: 'Yuuta Okkotsu está embrujado. Desde que su amiga de la infancia, Rika, murió en un accidente de tráfico, su fantasma se ha quedado con él. Pero su espíritu no aparece como la dulce chica que Yuuta conoció una vez. En cambio, se manifiesta como una entidad monstruosa y poderosa que lo protege ferozmente.', 
      image: 'assets/img_movies/Jujutsu_Kaisen_0.webp' 
    },
    { 
      title: 'Chainsaw Man: Arco de Reze', 
      year: 2025, 
      duration: '1h 40m',
      rating: 4.8,
      description: 'Denji trabajaba para la yakuza intentando saldar la deuda que heredó de sus padres, está lo traicionó y lo asesinó. Mientras perdía el conocimiento, Pochita, hace un pacto con Denji y le salva la vida. Esto los fusionó, dando origen al imparable Chainsaw Man. Una misteriosa chica llamada Reze irrumpe en su mundo, y Denji se enfrenta a su batalla más peligrosa hasta el momento, impulsado por el amor en un mundo donde la supervivencia no sigue ninguna regla.', 
      image: 'assets/img_movies/chaisawman.webp' 
    },
    { 
      title: '28 Days Later', 
      year: 2003, 
      duration: '1h 53m',
      rating: 4.3,
      description: 'En 28 días después una plaga fulminante arrasa el Reino Unido en menos de un mes. Jim, un joven que despierta del coma en un hospital abandonado, encuentra una ciudad vacía, infestada de seres convertidos por la rabia en máquinas de violencia. Junto a un grupo de supervivientes, deben atravesar un paisaje desolado donde el mayor peligro no siempre son los infectados. Entre ruinas y silencio, aparece el miedo y la dura pregunta: ¿queda algo de humanidad cuando todo parece haber sido devorado por el caos?', 
      image: 'assets/img_movies/28-dias.webp' 
    },
    { 
      title: 'Avengers: Infinity War', 
      year: 2018, 
      duration: '2h 29m',
      rating: 4.7,
      description: 'Un nuevo peligro acecha procedente de las sombras del cosmos. Thanos, el infame tirano intergaláctico, tiene como objetivo reunir las seis Gemas del Infinito, artefactos de poder inimaginable, y usarlas para imponer su perversa voluntad a toda la existencia. Los Vengadores y sus aliados tendrán que luchar contra el mayor villano al que se han enfrentado nunca, y evitar que se haga con el control de la galaxia.', 
      image: 'assets/img_movies/infinity.webp' 
    },
     { 
      title: 'Oppenheimer', 
      year: 2023, 
      duration: '3h',
      rating: 3.9,
      description: 'En tiempos de guerra, el brillante físico estadounidense Julius Robert Oppenheimer, al frente del "Proyecto Manhattan", lidera los ensayos nucleares para construir la bomba atómica para su país. Impactado por su poder destructivo, Oppenheimer se cuestiona las consecuencias morales de su creación. Desde entonces y el resto de su vida, se opondría firmemente al uso de armas nucleares.', 
      image: 'assets/img_movies/oppenheimer.webp' 
    },
    { 
      title: 'Demon Slayer: Kimetsu no Yaiba Castillo infinito', 
      year: 2025, 
      duration: '2h 8m',
      rating: 9.2,
      description: 'Con el jefe de la organización en peligro, Tanjirō y los Pilares corren hacia la mansión, pero son arrastrados a un espacio misterioso por obra de Kibutsuji. El lugar al que han caído Tanjirō y los cazadores es el bastión de los demonios: el Castillo Infinito. Así, el campo de batalla queda establecido para dar fin a la guerra entre humanos y demonios.', 
      image: 'assets/img_movies/demon-slayer.webp' 
    }
  ];

  constructor(private http: HttpClient) {}

  getMovies(): Movie[] {
    return this.movies;
  }

  searchMovies(term: string): Movie[] {
    if (!term.trim()) {
      return this.movies;
    }
    return this.movies.filter(movie => 
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  }

  getLatestMovies(): Movie[] {
    return this.movies.slice(-5).reverse(); 
  }

  getEpisodes(): Observable<{ Episodes: any[] }> {
    return this.http.get<{ Episodes: any[] }>(this.apiUrl);
  }
}


var videos = [
    'lost_world',
    'night_of_the_living_dead',
    '20000LeaguesUndertheSea',
    'TheMostDangerousGame',
    'house_on_haunted_hill_ipod',
    'VoyagetothePlanetofPrehistoricWomen',
    'Lady_Frankenstein',
    'Grave_of_the_Vampire_movie'
];




var index=Math.floor(Math.random() * videos.length);

window.onload = function what(){
document.getElementById("video").innerHTML='<iframe src="https://archive.org/embed/' + videos[index] + '" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>';





switch(videos[index]) {
    case 'lost_world':
      document.getElementById("name").innerHTML='<h3>The Lost World</h3>';
    	document.getElementById("poster").innerHTML='<img src="images/lost.jpg" alt="">';  
    	document.getElementById("synopsis").innerHTML='<p> The first film adaptation of Sir Arthur Conan Doyles classic \
    														novel about a land where prehistoric creatures still roam. </p> \
    													<p>In 1998, The Lost World was deemed "culturally, historically or  \
                              aesthetically significant" by the Library of Congress and selected \
                              for preservation in the United States National Film Registry.</p>';  
      document.getElementById("cast").innerHTML='\
                                <strong>Director</strong>\
                                <p>Harry O. Hoyt</p> \
                                <strong>Writer</strong>\
                                <p>Marion Fairfax (Screenplay)</p> \
                                <strong>Cast</strong>\
                                <p>Bessie Love       ...   Paula White</p> \
                                <p>Lewis Stone       ...   Sir John Roxton</p> \
                                <p>Wallace Beery     ...   Professor Challenger</p>';                          
       	 													break;


    case 'night_of_the_living_dead':
        document.getElementById("name").innerHTML='<h3>Night Of the Living Dead</h3>';
      	document.getElementById("poster").innerHTML='<img src="images/night.jpg" alt="">'; 
       	document.getElementById("synopsis").innerHTML='<p> In this classic yet still creepy horror film, strangers hold up \
    														in a rural Pennsylvania farmhouse and battle constant attacks from  \
    														dead locals who have been brought back to life by mysterious radiation.</p>'; 
        document.getElementById("cast").innerHTML='\
                                <strong>Director</strong>\
                                <p>George A. Romero</p> \
                                <strong>Writer</strong>\
                                <p>George A. Romero, John A. Russo</p> \
                                <strong>Cast</strong>\
                                <p>Duane Jones       ...   Ben</p> \
                                <p>Judith O Dea      ...   Barbra</p> \
                                <p>Marilyn Eastman   ...   Helen Cooper</p> \
                                <p>Keith Wayne       ...   Tom</p> \
                                <p>Judith Ridley     ...   Judy</p>\ ';                          

       	 													break;


    case '20000LeaguesUndertheSea':
    	document.getElementById("name").innerHTML='<h3>20000 Leagues Under the Sea</h3>';
		document.getElementById("poster").innerHTML='<img src="images/leagues.jpg" alt="">';
      	document.getElementById("synopsis").innerHTML='<p>Marshalling the expertise underwater experts Ernest and George Williamson, Universal financed  \
    														the extensive production which would require location photography, large sets, exotic costumes,  \
    														sailing ships, and a full-size navigable mock-up of the surfaced submarine Nautilus</p>';
         document.getElementById("cast").innerHTML='\
                                <strong>Director</strong>\
                                <p>Stuart Paton</p> \
                                <strong>Writer</strong>\
                                <p>Jules Verne (Novel)</p> \
                                <strong>Cast</strong>\
                                <p>Dan Hanlon ... Professor Aronnax</p> \
                                <p>Edna Pendleton ... Aronnaxs Daughter</p> \
                                <p>Allen Holubar  ... Capt. Nemo</p>';                       
    														break;

    case 'TheMostDangerousGame':
    	document.getElementById("name").innerHTML='<h3>The Most Dangerous Game</h3>';
    	document.getElementById("poster").innerHTML='<img src="images/game.jpg" alt="">';
      	document.getElementById("synopsis").innerHTML='<p> Ship wrecked Bob Rainsford (Joel McCrea) crawls ashore on a mysterious island and finds his  \
    														way to a creepy castle inhabited by a Russian Count named Zaroff (Leslie Banks).  \
    														There he meets the lovely Eve (Fay Wray) and her drunken brother Martin (Robert Armstrong),   \
                                who were also ship wrecked. \
                                It turns out that the "Game" of the title is the mad Count hunting down and killing human prey.   \
                                </p>';
        document.getElementById("cast").innerHTML='\
                                <strong>Director</strong>\
                                <p>Irving Pichel</p> \
                                <strong>Writer</strong>\
                                <p>James Ashmore Creelman</p> \
                                <strong>Cast</strong>\
                                <p>Joel McCrea  ... Bob</p> \
                                <p>Fay Wray ... Eve</p> \
                                <p>Robert Armstrong ... Martin</p>';
    														break;

    case 'house_on_haunted_hill_ipod':
    	document.getElementById("name").innerHTML='<h3>House on Haunted Hill</h3>';
    	document.getElementById("poster").innerHTML='<img src="images/house.jpg" alt="">';
      	document.getElementById("synopsis").innerHTML='<p> Vincent Price gives a stellar performance as the suavely \
                                malevolent host of a "haunted house party" who offers his guests \
                                $10,000 if they can survive a night in the murderous mansion.</p>';
    		document.getElementById("cast").innerHTML=' \
                                <strong>Director</strong>\
                                <p>William Castle</p> \
                                <strong>Writer</strong>\
                                <p>Robb White</p> \
                                <strong>Cast</strong>\
                                <p>Vincent Price  ...   Frederick Loren</p> \
                                <p>Carol Ohmart   ...   Annabelle Loren</p> \
                                <p>Richard Long   ...   Lance Schroeder</p> \ ';			 									

                                break;

    case 'VoyagetothePlanetofPrehistoricWomen':
    	document.getElementById("name").innerHTML='<h3>Voyage to the Planet of Prehistoric Women</h3>';
    	document.getElementById("poster").innerHTML='<img src="images/voyage.jpg" alt="">';
      	document.getElementById("synopsis").innerHTML='<p> A team of astronauts crashes on the surface of Venus. \
    														Accompanied by their robot, they explore the surface and end up \
    														destroying the Venusian God. This film is also known as "The Gill \
                                Women" and "The Gill Women of Venus". \
                                </p> ';
        document.getElementById("cast").innerHTML='\
                                <strong>Director</strong>\
                                <p>Peter Bogdanovich</p> \
                                <strong>Writer</strong>\
                                <p>Henry Ney</p> \
                                <strong>Cast</strong>\
                                <p>Mamie Van Doren  ...   Moana</p> \
                                <p>Mary Marr       ...   Verba</p> \
                                <p>Paige Lee        ...   Twyla</p> \ ';
    														break;


        case 'Lady_Frankenstein':
      document.getElementById("name").innerHTML='<h3>Lady Frankenstein</h3>';
      document.getElementById("poster").innerHTML='<img src="images/lady.jpg" alt="">';
        document.getElementById("synopsis").innerHTML='<p> When Dr. Frankenstein is killed by a monster he created, his daughter and his lab assistant Marshall continue his experiments.  \
                                The two fall in love and attempt to transplant Marshalls brain in to the muscular body of a retarded servant Stephen, in order to  \
                                prolong the aging Marshalls life. Meanwhile, the first monster seeks revenge on the grave robbers who sold the body parts used in   \
                                its creation to Dr. Frankenstein. Soon it comes after Marshall and the doctors daughter. \
                                </p>';
        document.getElementById("cast").innerHTML='\
                                <strong>Director</strong>\
                                <p> Mel Welles</p> \
                                <strong>Writer</strong>\
                                <p>Edward Di Lorenzo</p> \
                                <strong>Cast</strong>\
                                <p>Joseph Cotten                ...   Baron Frankenstein</p> \
                                <p>Rosalba Neri            ...   Tania Frankenstein</p> \
                                <p>Peter Whiteman    ...   The Creature</p> \
                                <p>Paul Muller           ...   Dr. Charles Marshall</p>';
                                break;


        case 'Grave_of_the_Vampire_movie':
      document.getElementById("name").innerHTML='<h3>Grave of the Vampire (1972)</h3>';
      document.getElementById("poster").innerHTML='<img src="images/grave.jpg" alt="">';
        document.getElementById("synopsis").innerHTML='<p> Kroft, a legendary vampire, returns from sleep. Kroft attacks a couple in a graveyard,  \
                                raping the woman. The child born feeds only on blood from his mothers breast.  \
                                </p>';
        document.getElementById("cast").innerHTML='\
                                <strong>Director</strong>\
                                <p>John Hayes</p> \
                                <strong>Writer</strong>\
                                <p>David Chase</p> \
                                <strong>Cast</strong>\
                                <p>William Smith         ...   James Eastman</p> \
                                <p>Michael Pataki       ...   Caleb Croft</p> \
                                <p>Lyn Peters            ...   Anne Arthur</p> \
                                <p>Diane Holden          ...   Anita Jacoby</p>';
                                break;
      	 
      	  default:
}

};

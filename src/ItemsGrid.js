
import puppy from './images/puppy.PNG';
import kitten from './images/kitten.png';
import goldfish from './images/goldfish.jpg';
import hamster from './images/hamster.jpg';


function ItemsGrid() {
  return (
    <div>
        <h4 class="gridTitle">Pets for Sale</h4>
        <div class="buttonsGrid">
            <div class="one">
                <div class=''>
                    <img width={100} height={100} src={puppy}></img>
                    <div>
                        <span>Puppy</span>
                    </div>
                        <span>$200</span>
                    <div>
                    </div>
                </div>
            </div>
            <div class="two">
                <div class=''>
                    <img width={100} height={100} src={kitten}></img>
                    <div>
                        <span>Kitten</span>
                    </div>
                    <div>
                        <span>$180</span>
                    </div>
                </div>
            </div>
            <div class="three">
                <div class=''>
                    <img width={100} height={100} src={hamster}></img>
                    <div>
                        <span>Hamster</span>
                    </div>
                    <div>
                        <span>$20</span>
                    </div>
                </div>
            </div>
            <div class="four">
                <div class=''>
                    <img width={100} height={100} src={goldfish}></img>
                    <div>
                        <span>Goldfish</span>
                    </div>
                    <div>
                        <span>$5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemsGrid;
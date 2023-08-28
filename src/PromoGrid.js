
import dogleash from './images/dogLeash.jpeg';



function PromoGrid() {
  return (
    <div>
        <h4 class="gridTitle">Recommended Items</h4>
        <div class="buttonsGrid">
            <div class="one">
                <div class=''>
                    <img width={100} height={100} src={dogleash}></img>
                    <div>
                        <span>Dog Leash</span>
                    </div>
                    <div>
                        <span>$5</span>
                    </div>
                </div>
            </div>
            <div class="two">
                <div class=''>
                    <img width={100} height={100} src={dogleash}></img>
                    <div>
                        <span>Dog Leash</span>
                    </div>
                    <div>
                        <span>$5</span>
                    </div>
                </div>
            </div>
            <div class="three">
                <div class=''>
                    <img width={100} height={100} src={dogleash}></img>
                    <div>
                        <span>Dog Leash</span>
                    </div>
                    <div>
                        <span>$5</span>
                    </div>
                </div>
            </div>
            <div class="four">
                <div class=''>
                    <img width={100} height={100} src={dogleash}></img>
                    <div>
                        <span>Dog Leash</span>
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

export default PromoGrid;
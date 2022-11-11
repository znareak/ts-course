namespace Utility {
  export namespace Taxes {
    export function getIVA (price : number) : number{
      return (price * 0.21) * price
    }

    export function getIVAStrong (price : number) : number{
      return (price * 0.35) * price
    }
  }
}
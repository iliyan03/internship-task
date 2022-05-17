function bestVelocity(results){
    if (results.length < 3){
        return "Error"
    }
    let best_seq = {}
    let seq = []
    let best_sum = 0
    for (let i = 0; i < results.length; i++){ /* For every number in results */
        seq.push(results[i]); /* Add the number in the seq list variable */
        if (seq.length === 3){
            let sum = 0
            for (let n = 0; n < seq.length; n++){ /* for every number in seq list variable */
                sum += seq[n] /* Add it to the sum int variable */
            }
            if (sum >= best_sum){
                best_sum = sum
                best_seq['sequence'] = seq;
                best_seq['sum'] = sum;
            }
            seq = []
            i = -1
            results.shift()
        }
    }
    return JSON.stringify(best_seq)
    }

const seqs = [989, 344, 852, 164, 562, 309, 479, 811, 352, 652, 671, 491, 746, 139, 152, 901, 467, 600, 965, 649, 571, 753, 63, 904, 223, 697, 197, 515, 865, 158, 16, 965, 466, 140, 486, 794, 274, 874, 744, 695, 164, 890, 150, 546, 447, 641, 965, 693, 737, 949]

console.log(bestVelocity(seqs))
public class SelectionSort{
    public static int[] selectionSort(int[] arr)
    {
        for(int i =0;i<arr.length-1;i++)
        {
            int min =i;
            for(int j=i+1;j<arr.length;j++)
            {
                if(arr[j]<arr[min])
                {
                    min = j;
                }
            }
            if(i!=min)
            {

                int temp = arr[i];
                arr[i]= arr[min];
                arr[min]= temp;
            }
        }
        return arr;
    }
public static void main(String[] args) {
    int[] arr = {6, 5, 4, 3, 2, 1};
    int[] sorted = selectionSort(arr);
        for(int val : sorted) {
            System.out.print(val + " ");
        }

}
}
package Programmers;

public class _240502 {
    public static void main(String[] args) {

    }

    // #1 PCCE 기출문제 8번, 창고정리
    public String _240502(String[] storage, int[] num){
        int num_item = 0;
        String[] clean_storage = new String[storage.length];
        //clean_storage = toString().split("pencil", "pencil", "pencil", "book");
        //System.out.println(clean_storage);
        // 배열 선언 첫번째 방법
        storage = new String[4];
        storage[0] = "pencil";
        storage[1] = "pencil";
        storage[2] = "pencil";
        storage[3] = "book";
        // storage = new String[] { "pencil", "pencil", "pencil", "book" };

        System.out.println(storage[0]);


//        int[] clean_num = new int[num.length];
//
//        for(int i = 0; i<storage.length; i++){
//            int clean_idx = -1;
//            for(int j = 0; j < num_item; j++){
//                if(storage[i].equals(clean_storage[j])){
//                    clean_idx = j;
//                    break;
//                }
//            }
//            if(clean_idx == -1){
//                clean_storage[num_item] = Integer.toStirng(storage[i]);
//                clean_num[num_item] = num[i];
//                num_item += 1;
//            }else {
//                clean_num[clean_idx] += num[i];
//            }
//
//            // 아래 코드에는 틀린 부분 없음
//             int num_max = -1;
//            String answer = "";
//            for(i = 0; i < num_item; i++){
//                if(clean_num[i] > num_max){
//                    num_max = clean_num[i];
//                    answer = clean_storage[i];
//                }
//            }
//            return answer;
//        }
        return null;
    }
}


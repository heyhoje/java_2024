package Programmers;

import java.io.OptionalDataException;
import java.util.Scanner;

public class _240429 {
    public static void main(String[] args) {
        // #1 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면?
        int sum = 0;
        for(int i = 1; i < 1000; i++){
            if(i % 3 == 0 || i % 5 == 0){
                sum += i;
            }
        }
        System.out.println("3 또는 5의 배수의 합은 " + sum + " 입니다.");

        // #2 피보나치 수열에서 4백만 이하이면서 짝수인 항의 합
        // j <= 4,000,000 && j % 2 == 0
        int fibonacci = 0;
        for(int j = 1; j <= 4000000; j++){

        }

        // #3 PCCE 기출문제 1번, 출력
        String msg = "Spring is beginning";
        int val1 = 3;
        String val2 = "3";

        System.out.println(msg);
        System.out.println(val1 + 10);
        System.out.println(val2 + "10");

        // #4 PCCE 기출문제 2번, 피타고라스의 정리
        // a와 c가 주어질 때, 다른 한 변의 길이의 제곱, b_square을 출력하도록 코드 수정
        // 1 <= a < c <= 100

        Scanner sc = new Scanner(System.in);
        System.out.println("정수 a값을 입력하시오");
        int a = sc.nextInt();
        System.out.println("정수 c값을 입력하시오");
        int c = sc.nextInt();

        int b_square = c*c - a*a;

        System.out.println("b_square의 값은 : " + b_square);

        // #5 PCCE 3번, 나이계산
        Scanner y = new Scanner(System.in);
        System.out.println("태어난 연도를 입력하세요");
        int year = y.nextInt();
        System.out.println("구하려는 나이의 종류를 입력하세요 : Korea/Year");
        String age_type = y.next();
        int answer = 0;

        if(age_type.equals("Korea")){
            answer = 2030 - year + 1;
        } else if(age_type.equals("Year")){
            answer = 2030 - year;
        }

        System.out.println("당신은 2030년에 " + answer + "살 입니다.");

        // #6 PCCE 4번, 저축
        // 0 <= start <= 99
        // 1 <= before <= after <= 25

        Scanner saving = new Scanner(System.in);
        int start = saving.nextInt();
        int before = saving.nextInt();
        int after = saving.nextInt();

        int money = start;
        int month = 1;
        while(money < 70){
            money += before;
            month++;
        }
        while(money < 100){
            money += after;
            month++;
        }
        System.out.println(month + "개월 소요됩니다.");
        
    }

    // #7 PCCE 5번, 산책
    // 어떻게 이동했다는 경로 입력이 없는데, 어떻게 리턴값이 나오는지 모르겠음.
    public int[] solution(String route){
        // #7 PCCE 5번, 산책
        int east = 0;
        int north = 0;
        int[] answer2 = new int [2];
        for(int w = 0; w < route.length(); w++){
            switch(route.charAt(w)){
                case 'N':
                    north++;
                    break;
                case 'S':
                    north--;
                    break;
                case 'E':
                    east++;
                    break;
                case 'W':
                    east--;
                    break;
            }
        }
        answer2[0] = east;
        answer2[1] = north;
        return answer2;
    }

    public String[] solution(int[] numbers, int[] our_score, int[] score_list){
        // numbers : 학생들 번호가 담긴 리스트, our_score : 가채점한 점수, score_list : 실제 성적
        OptionalDataException number = null;
        int num_student = number.length;
        String[] answer3 = new String[num_student];

        for(int s = 0; s < num_student; s++){
            if(our_score[s] == score_list[s]){
                answer3[s] = "Same";
            }else {
                answer3[s] = "Different";
            }
        }
        return answer3;
    }

}
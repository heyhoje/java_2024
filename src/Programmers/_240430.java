package Programmers;

public class _240430 {
    public static void main(String[] args) {

    }

    // #1 PCCE 기출문제 7번, 가습기
    public int func1(int humidity, int val_set){
        // "target" 모드 : 습도가 설정값 미만일 경우
        if(humidity < val_set){
            return 3;
        }
        return 1;
    }

    public int func2(int humidity){
        // "auto" 모드 : 습도에 따라 가습량을 자동으로 설정
        if(humidity >= 50){
            return 0;
        }else if (humidity  >=40){
            return 1;
        }else if (humidity >= 30){
            return 2;
        }else if (humidity >= 20){
            return 3;
        }else if (humidity >= 10){
            return 4;
        }else{
            return  5;
        }
    }

    public int func3(int humidity, int val_set){
        // "minimum" 모드 : 설정값에 따라 최소로 가습량 조절
        if(humidity < val_set){
            return 1;
        }
        return 0;
    }

    public int solution(String mode_type, int humidity, int val_set){
        int answer = 0;

        if(mode_type.equals("auto")){
            answer = func2(humidity);
        }else if(mode_type.equals("target")){
            answer = func1(humidity, val_set);
        }else if(mode_type.equals("minimum")){
            answer = func3(humidity, val_set);
        }
        return answer;
    }

}

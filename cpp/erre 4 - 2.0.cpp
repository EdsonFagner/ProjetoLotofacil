#include <iostream>
#include <cstdlib>
#include <cmath>
#include <windows.h>

using namespace std;

int n [25]={1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25};

int n1 [25];

int v1=0, v2=0, v3=0, v4=0, v5=0, v6=0, v7=0, v8=0, v9=0, v10=0, i=0, x=25, y=0, z=0;

main (){

cout<<"Digite 4 numeros: ";cout<<endl;

cin>>v1;cout<<endl;

cin>>v2;cout<<endl;

cin>>v3;cout<<endl;

cin>>v4;cout<<endl;

v1--;

v2--;

v3--;

v4--;

n[v1]=0;

n[v2]=0;

n[v3]=0;

n[v4]=0;



for (i=0; i<25; i++){
	n1[i]=n[i];
}

cout<<endl;

		v5=2; v6=6; v7=9; v8=12; v9=15; v10=22;
		v5--; v6--; v7--; v8--; v9--; v10--;
		n[v5]=0; n[v6]=0; n[v7]=0; n[v8]=0; n[v9]=0; n[v10]=0;
		
		for(i=0; i<250; i++){
			if (n[x]==0){
				n[x]=n[(x-1)];
				n[x-1]=0;
			}
			x--;
			if (i==224){
				x=24;
			}
			if (i==199){
				x=24;
			}
			if (i==174){
				x=24;
			}
			if (i==149){
				x=24;
			}
			if (i==124){
				x=24;
			}
			if (i==99){
				x=24;
			}
			if (i==74){
				x=24;
			}
			else if (i==49){
				x=24;
			}
			else if(i==24){
				x=24;
			}
		}
		
		for (i=10; i<25; i++){
			cout<<n[i]<<endl;
		}
		
		cout<<endl<<endl<<endl;
		
		Sleep(1000);
		
		for (i=0; i<25; i++){
			n[i]=n1[i];
		}
		
		Sleep (1000);
		
		v5=2; v6=6; v7=9; v8=12; v9=15; v10=22;
		v5--; v6--; v7--; v8--; v9--; v10--;
		n[v5]=0; n[v6]=0; n[v7]=0; n[v8]=0; n[v9]=0; n[v10]=0;
		
		x=24;
		
		for(i=0; i<250; i++){
			if (n[x]==0){
				n[x]=n[(x-1)];
				n[x-1]=0;
			}
			x--;
			if (i==224){
				x=24;
			}
			if (i==199){
				x=24;
			}
			if (i==174){
				x=24;
			}
			if (i==149){
				x=24;
			}
			if (i==124){
				x=24;
			}
			if (i==99){
				x=24;
			}
			if (i==74){
				x=24;
			}
			else if (i==49){
				x=24;
			}
			else if(i==24){
				x=24;
			}
		}
		
		Sleep(1000);
		
		
		for (i=10; i<25; i++){
			cout<<n[i]<<endl;
		}
		


system ("pause>NULL");
return 0;	
}

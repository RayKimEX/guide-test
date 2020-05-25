Hybrid Chatting [Gitple](https://gitple.io/en)

## Skill Routing

You can use Skill Routing feature which assign agent to consult with appropriate customers

##### Terminology
`Skill Routing` : This refers to the function that is automatically assigned through the conditions set in each skill group.   
`Skill Group` : The basic elements that make up the 'skill assignment' are the conditions of `category`,` customer tag`, and `group code`,
It is a group to set which counselor is suitable for that.   

<br>

##### 스킬배정 설정 방법
  <img height="200" alt="Dictionary example" src="/en/assets/images/skillrouting/wsSkillRoutingAdding.png">    

Go to `Settings`-> `Assignment`-> `Assign Skills`, click the `Add Skill Group` button    
<br>
<br>
<br>

##### 설정 화면 ( 스킬 그룹 추가 화면 )
  <img height="500" alt="Dictionary example" src="/en/assets/images/skillrouting/wsSkillRouting.png">      


 - **Name** : Insert the name of the skill group  
 - **Condition** : Specify the conditions `category`,` customer tag`, and `group code` to be assigned to the counselor.   
In the case of each condition, in the case of none, it means that the condition itself <span style="background-color:black; border-radius:4px; padding:4px; color:white; font-size:11px; font-weight:bold">does not exist</span> even if there is <span style="background-color:black; border-radius:4px; padding:4px; color:white; font-size:11px; font-weight:bold">at least one</span> condition.
  * **Category**: When processing is required according to the category created in FAQ management
  * **User Tags**: When processing according to customer tags created in tag management is required
  * **Group code**: When processing is required according to the group code assigned to the chat app integration
 - **AND/OR** : There are options of `Any condition is satisfied`, `All conditions are satisfied`
  * `Any condition is satisfied` : Even if only one of the above conditions is satisfied, the assignment proceeds
  * `All conditions are satisfied` : Assignment will be made only if all of the above conditions are satisfied
 - **Manager** : Counselor (or group) who will be in charge of the skill group
 - **Not assigned to other representatives** :    
If the customer requesting consultation is not included in the skill group, through the exception handling allocation method,
 It is evenly assigned to ** other skill groups ** or ** all counselors **, which is a function that excludes exception handling assignment method.
 If the customer requesting consultation to the corresponding skill group matches, set the 'Do not assign to another person' option,
 In no case will the customer be assigned to another representative.



##### Basic Operation
* Basically, for customers who have counseling,
According to [**AND / OR**] of the skill group set above, according to [**Customer meeting the conditions**],
 Among the agents assigned to the skill group, you will be connected to an online (counseling) agent.
  - All counselors meeting the skill group condition are ** hidden ** or
  Or, if there is no assigned counselor, the skill group conditions in the next order are checked.
  - If all of the counselors are ** Busy **, they will wait without checking for the next skill group.
  - If not applicable to all skill groups, it is evenly distributed to all counselors.
  
* ** Since we check skill groups in order from the first **, the counselor in charge may vary depending on the order adjustment.


---

### Use Case

* There are 10 FAQ categories that are handled by different agents for 3/6/1
  1. Create 3 skill groups (e.g. membership, products, etc)
  2. In the membership skill group, add 3 categories and assign agents
  3. In the products skill group, add 6 categories and assign agents
  4. In the etc skill group, add 1 category and assign agents

* For the logged-in customers, there are Basic / Excellent / VIP membership levels.
  1. Add 'basic', 'excellent' and 'vip' to the `group` attribute in the chat app integration code
  2. Create 3 skill groups (e.g. Basic customers, Excellent customers, VIP customers)
  3. In the Basic customers skill group, add basic string in the code property and assign agents.
  4. In the Excellent customers skill group, add excellent string in the code property and assign agents.
  5. In the VIP customers skill group, add vip string in the code property and assign agents.

  (Similarly, when assigning agents by distinguishing between the main page and the product page on the homepage)
* When a dedicated organization responds to customers tagged with Black Consumer
  1. Create a skill group named 'Black Consumer'
  2. In the Black Consumer skill group, add customer tag (e.g. 'black') used in counseling and assign agent group

  (The agent group is managed by "Agent Group" in Settings > Agents)  

---

### Conditions details

#### FAQ Category

This is the way to use the category selected by the bot immediately before connecting the agent. Therefore, the FAQ category should be set and the FAQ bots should be used.

#### Customer Tag

This is how you use the tags you give your customers. Therefore, "**Customer Tag**" must be created and the tag assigned to the customer.

#### Group Code

Below is explaining how to assign VIP members to specific agents from the user groups created in the above example.

* When you launch the chat app at sign-in

  ```javascript
  Gitple('boot', {
    id: '12345',
    group: 'vip'
  });
  ```

* When sign in after running the chat app
  ```javascript
  if (userLoggedin) { // When your user has signed in 
    Gitple('update', {
      id: '12345',
      group: 'vip'
    }
  }
  ```

After coding as above, if the customer requests to connect the agent, it will be automatically assigned to the agent (or agent group) set in the `VIP member`.

---

© Gitple Inc. All Rights Reserved.

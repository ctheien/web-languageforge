<?php

namespace Api\Model\Shared;

class UnreadQuestionModel extends UserUnreadModel
{
    public function __construct($userId, $projectId)
    {
        parent::__construct('question', $userId, $projectId);
    }
}
